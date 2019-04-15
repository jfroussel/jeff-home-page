import React from 'react'
import LogoReact from './assets/reactjs.png'
import LogoRedux from './assets/redux.png'
import LogoMongo from './assets/mongodb.png'
import LogoBootstrap from './assets/bootstrap.png'
import LogoFirebase from './assets/firebase.png'
import LogoGraphql from './assets/graphQL.png'
import LogoGithub from './assets/github.png'
import LogoMaterialui from './assets/material-ui.png'
import LogoMysql from './assets/mysql.png'
import LogoNode from './assets/node.png'
import LogoReactRouter from './assets/react-router.png'
import LogoSass from './assets/sass.png'
import LogoDebian from './assets/debian.png'
import LogoMacosx from './assets/macosx.png'
import LogoHtml from './assets/html.png'
import LogoJs from './assets/javascript.png'

const style = {
    logo: {
        width: 60,
        marginLeft: 45
    },
    container: {
        marginTop: 0,
        marginBottom: '1rem',
        marginRight: '2rem'
    }
}

const Brands = () => {
    return (

        <div className="text-center pt-5" style={style.container}>
            <p className="pt-5">
                <img src={LogoJs} className="rounded" alt="react" style={style.logo} />
                <img src={LogoHtml} className="rounded" alt="react" style={style.logo} />
            </p>
            <p>
                <img src={LogoReact} className="rounded" alt="react" style={style.logo} />
                <img src={LogoRedux} className="rounded" alt="react" style={style.logo} />
                <img src={LogoMongo} className="rounded" alt="react" style={style.logo} />
                <img src={LogoBootstrap} className="rounded" alt="react" style={style.logo} />
            </p>
            <p>
                <img src={LogoSass} className="rounded" alt="react" style={style.logo} />
                <img src={LogoFirebase} className="rounded" alt="react" style={style.logo} />
                <img src={LogoGraphql} className="rounded" alt="react" style={style.logo} />
                <img src={LogoGithub} className="rounded" alt="react" style={style.logo} />
            </p>
            <p>
                <img src={LogoMysql} className="rounded" alt="react" style={style.logo} />
                <img src={LogoNode} className="rounded" alt="react" style={style.logo} />
                <img src={LogoReactRouter} className="rounded" alt="react" style={style.logo} />
                <img src={LogoMaterialui} className="rounded" alt="react" style={style.logo} />
            </p>
            <p>
                <img src={LogoDebian} className="rounded" alt="react" style={style.logo} />
                <img src={LogoMacosx} className="rounded" alt="react" style={style.logo} />
            </p>
        </div>

    )
}

export default Brands