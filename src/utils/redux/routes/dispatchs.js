export const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (value) => dispatch({ type: 'CHANGE_PAGE', payload: value }),
  }
}