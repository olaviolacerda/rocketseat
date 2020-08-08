import R from "ramda";

export const hasAnyNilValue = (ar: unknown[]): boolean => {
  return R.any(R.isNil, ar);
}