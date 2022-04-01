import { buttongroup, toggle, variable } from '@betty-blocks/component-sdk';
import { advanced } from './advanced';
import { styles } from './styles';

export const options = {
  visible: toggle('Toggle visibility', {
    value: true,
    configuration: { as: 'VISIBILITY' },
  }),

  type: buttongroup(
    'type',
    [
      ['Submit', 'submit'],
      ['Reset', 'reset'],
    ],
    { value: 'submit' },
  ),

  buttonText: variable('Button text', { value: ['Send'] }),
  ...styles,
  ...advanced,
};
