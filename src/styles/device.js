export const SCREEN = {
  ssm: '390px',
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
};

export const DEVICE = {
  ssm: `@media only screen and (min-width: ${SCREEN.ssm})`,
  sm: `@media only screen and (min-width: ${SCREEN.sm})`,
  md: `@media only screen and (min-width: ${SCREEN.md})`,
  lg: `@media only screen and (min-width: ${SCREEN.lg})`,
  xl: `@media only screen and (min-width: ${SCREEN.xl})`,
};
