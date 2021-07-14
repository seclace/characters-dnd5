import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAuth0 } from '../contexts/auth0.context';
import { ApiService } from '../services/api.service';

export function Home(): JSX.Element {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [token, setToken] = useState('');
  const [classes, setClasses] = useState<any[]>([]);
  const [activeClass, setActiveClass] = useState<any>(null);

  useEffect(() => {
    if (isAuthenticated && getIdTokenClaims) {
      getIdTokenClaims()
        .then(({ __raw }) => {
          setToken(__raw);
        });
    }
    if (token) {
      ApiService.setToken(token);
      ApiService.getClasses()
        .then(setClasses)
        .catch(console.warn);
    }
  }, [token, isAuthenticated, getIdTokenClaims]);

  const handleClassChange = (e: ChangeEvent<any>) => {
    const nextActiveClass = classes.find(c => c.id === e.target.value);
    setActiveClass(nextActiveClass);
  };

  return <div>
    <select onChange={handleClassChange}>
      <option value={'none'}>None</option>
      {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
    </select>
    <div>{activeClass?.description || 'None'}</div>
  </div>;
}
