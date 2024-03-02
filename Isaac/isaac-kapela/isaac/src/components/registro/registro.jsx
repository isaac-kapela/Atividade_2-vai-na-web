// import registro from "./registrocss";
import AddAvatar from "../../assets/img/add avatar.png";
import '../../App.scss';


const registro = () => {
    return (
        <div className="registro-container">
            <span className="titulo">KAPELA</span>
            <span className="subTitulo">Registro</span>
            <form>
                <input type="text" placeholder="Digite o seu nome" />
                <input type="text" placeholder="Digite o seu email" />
                <input type="password" placeholder="Digite a sua senha" />
                <input type="file" id="file"  style={{dispaly:'none' }}/>
                <label htmlFor="file">
                    <img className="imagem" src={AddAvatar} alt="" />
                    <span>Adiciona o avatar</span>
                </label>
                <button>registrar</button>
            </form>
            <p>Você ainda não se registrou? Resgistar</p>
        </div>
    )
}

export default registro;
