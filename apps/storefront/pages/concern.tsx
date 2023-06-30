import React, { FC } from 'react';

interface ConcernProps {
  data: any;
}

const Concern: FC<ConcernProps> = React.memo((props) => {
  const { data } = props;
  const content = <span>{JSON.stringify(data)}</span>;
  return <div>{content}</div>;
});

Concern.displayName = 'Concern';

export async function getServerSideProps() {
  const data = (await fetch(`https://api.exchangerate-api.com/v4/latest/CNY`)).json();
  return { props: { data } };
}

export default Concern;
