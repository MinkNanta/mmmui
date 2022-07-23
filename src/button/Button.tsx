import React, { PropsWithChildren } from 'react';

export const Button = ({ children }: PropsWithChildren<{}>) => (
  <button className="bg-red-900 rounded-3xl">{children}</button>
);
