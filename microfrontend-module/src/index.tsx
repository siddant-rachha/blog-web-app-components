import React from 'react';
export const Microfrontend = ({ text }: { text: string }) => {
  return (
    <div>
      <h4>Microfrontend</h4>
      <div>This text comes from surface: ${text}</div>
    </div>
  );
};
