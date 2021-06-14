import React, { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState('');
  const fetchData = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(currentIndex);
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {users.map((user, index) => {
        const { company, dates, duties, id, order, title } = user;
        return (
          <div>
            <div>
              <button onClick={() => setCurrentIndex(index)}>{company}</button>
            </div>
            <div>
              {currentIndex === index && (
                <div>
                  <h1>{title}</h1>
                  {duties.map((duty, index) => {
                    return <p>{`${index + 1})${duty}`}</p>;
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
