const customStyles = {
  container: provider => {
    return {
      ...provider,
      width: '100%',
      borderRadius: '5px',
    };
  },
  control: (provider, state) => {
    return {
      ...provider,
      fontSize: '14px',
      fontFamily: 'Roboto, sans-serif',
      border: state.isFocused ? '2px #212529 solid' : '2px #4c99fe solid',
      boxShadow: 'none',
      '&:hover': { borderColor: state.isFocused ? '#212529' : '#4c99fe' },
    };
  },
  option: provided => {
    return {
      ...provided,
      color: 'grey',
      backgroundColor: 'white',
      fontSize: '14px',
      fontFamily: 'Roboto, sans-serif',
      ':hover': { backgroundColor: '#4c99fe', color: 'white' },
    };
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      fontSize: '14px',
      fontFamily: 'Roboto, sans-serif',
    };
  },
};

export default customStyles;
