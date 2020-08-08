// Funão delay aciona o .then após 1s
// A
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
    await delay();
    console.log('1s'); 

    await delay();
    console.log('2s');

    await delay();
    console.log('3s');
};

umPorSegundo();

//B

async function getUserFromGithub(user) {
    try {
      const { data: userInfo } = await axios.get(`https://api.github.com/users/${user}`);

      console.log(userInfo);
    } catch (error) {
      console.warn('Usuário não existe');
    }
}
  
getUserFromGithub('olaviolacerda');
getUserFromGithub('ricardo93borges');

// C
class Github {
    static async getRepositories(repo) {
        try {
            const {data: repoInfo} = axios.get(`https://api.github.com/repos/${repo}`)

            console.log(repoInfo)
        } catch (error) {
            console.warn('Repositório não existe')
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async usuario => {
    try {
        const {data: user} = axios.get(`https://api.github.com/users/${user}`);

        console.log(user)
    } catch (error) {
        console.warn('Usuário não existe')
    }
    
}
buscaUsuario('diego3g');
