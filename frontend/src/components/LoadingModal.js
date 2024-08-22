import classes from '../components/componentsStyles/LoadingModal.module.css'

const LoadingModal = () => {
    return (
      <div className={classes.modal}>
        <div className={classes.spinner}>Loading...</div>
      </div>
    );
  };

  export {LoadingModal}