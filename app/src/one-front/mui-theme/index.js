export const muiTheme = ({ registerAction }) => {
  registerAction({
    hook: "$MUI_SET_THEME",
    handler: (theme) => ({
      ...theme,
      palette: {
        background: {
          default: '#FFFFFF' //'#E0F1F1'
        },
      }
    })
  });
};