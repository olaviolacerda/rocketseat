import { Request, Response } from 'express';
import * as Uuid from '@somosphi/uuid';

import db from '../database/connection';

import convertHourToMinutes from '../utils/conversion';
import { hasAnyNilValue } from '../utils/validation';

import { ScheduleItem } from '../types';

export default class ClassesController {
  async index(req: Request, res: Response) {
    const { week_day, subject, time } = req.query;

    if (hasAnyNilValue([week_day, subject, time])) {
      return res.status(400).json({
        error: 'Missing filters to search for classes',
      })
    }

    const timeInMinutes = convertHourToMinutes(time as string);

    const classes = await db('classes')
      .whereExists(function () {
        return this.select('*')
          .from('class_schedules')
          .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedules`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedules`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedules`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject as string)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return res.json({ classes });
  }

  async create(req: Request, res: Response) {
    const classParams = req.body;

    const trx = await db.transaction();

    try {
      const userId = Uuid.generate();
      const classId = Uuid.generate();

      await trx('users').insert({
        name: classParams.name,
        avatar: classParams.avatar,
        whatsapp: classParams.whatsapp,
        bio: classParams.bio,
        id: userId
      });

      await trx('classes').insert({
        subject: classParams.subject,
        cost: classParams.cost,
        user_id: userId,
        id: classId
      });

      const classSchedule = classParams.schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          class_id: classId,
          id: Uuid.generate(),
        };
      });

      await trx('class_schedules').insert(classSchedule);

      await trx.commit();

      return res.sendStatus(201);
    } catch (error) {
      await trx.rollback();

      console.debug(error);

      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      });
    }
  }
}