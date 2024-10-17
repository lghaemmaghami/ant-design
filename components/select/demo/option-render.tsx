import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const options = [
  {
    label: 'Private',
    value: 'private',
    emoji: '🔒',
    desc: 'Private to me',
  },
  {
    label: 'Space',
    value: 'space',
    emoji: '👥',
    desc: 'Space',
  },
  {
    label: 'Account',
    value: 'account',
    emoji: '🌎',
    desc: 'Account',
  }
];

const App: React.FC = () => (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select permission"
    defaultValue={['space']}
    onChange={handleChange}
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )}
  />
);

export default App;
