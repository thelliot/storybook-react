import React from 'react'

export default {
  title: 'Emoji',
};

const Emoji = ({emoji, label}) => (<span role="img" aria-label={label}>{emoji}</span>);

export const emoji = () => (<Emoji emoji="🥳" label="party emoji" />)

