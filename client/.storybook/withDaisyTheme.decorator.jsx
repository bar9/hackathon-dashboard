import React from 'react';

export const DEFAULT_THEME = 'business';

export const withDaisyTheme = (Story, context) => {
  const { theme } = context.globals;

  return <div data-theme={theme || DEFAULT_THEME}>
    <Story/>
  </div>;
}
