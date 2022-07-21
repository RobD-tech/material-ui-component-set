import * as React from 'react';
import { BeforeCreateArgs, Icon, prefab } from '@betty-blocks/component-sdk';
import { MultiAutocomplete } from './structures/MultiAutoCompleteInput';

const beforeCreate = ({
  close,
  components: { CreateFormInputWizard },
  prefab: originalPrefab,
  save,
}: BeforeCreateArgs) => {
  const structure = originalPrefab.structure[0];
  if (structure.type !== 'COMPONENT')
    return <div>expected component prefab, found {structure.type}</div>;

  // TODO: remove this code
  const actionVariableOption = structure.options.find(
    (option: { type: string }) => option.type === 'ACTION_JS_VARIABLE',
  );

  // TODO: remove this code
  if (!actionVariableOption) {
    return <div>Prefab is missing the actionVariable component option</div>;
  }

  return (
    <CreateFormInputWizard
      supportedKinds={['HAS_AND_BELONGS_TO_MANY', 'HAS_MANY']}
      actionVariableOption={actionVariableOption.key}
      labelOptionKey="label"
      nameOptionKey="actionVariableId"
      close={close}
      prefab={originalPrefab}
      save={save}
    />
  );
};

const attributes = {
  category: 'FORMV2',
  icon: Icon.AutoCompleteIcon,
  keywords: ['Form', 'input'],
};

export default prefab('Multi Autocomplete Beta', attributes, beforeCreate, [
  MultiAutocomplete({ label: 'Autocomplete', type: 'text' }),
]);
