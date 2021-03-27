import style from './preloader.module.css';

const Preloader = () => {
   return (
      <div className={style.spinner_wrapper}>
         <div className={style.spinner_center}>
            <div className={ style.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
         </div>
      </div>
   )
}

export default Preloader;