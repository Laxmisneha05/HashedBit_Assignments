import React, { useState } from 'react';
import './App.css';

function SurveyForm() {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [feedback, setFeedback] = useState('');
  const [capital, setCapital] = useState('');
  const [language, setLanguage] = useState('');
  const [season, setSeason] = useState('');
  const [continent, setContinent] = useState('');
  const [drink, setDrink] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the form data to your backend or do whatever you want with it
    console.log('Form submitted:', {
      name,
      email,
      age,
      gender,
      feedback,
      capital,
      language,
      season,
      continent,
      drink,
    });
  };

  return (
    <div>
      <h2>Survey Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label>
          1. What is the capital of India?
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="New Delhi"
            checked={capital === "New Delhi"}
            onChange={(e) => setCapital(e.target.value)}
          />
          New Delhi
        </label>
        <label>
          <input
            type="radio"
            value="Mumbai"
            checked={capital === "Mumbai"}
            onChange={(e) => setCapital(e.target.value)}
          />
          Mumbai
        </label>
        <br />
        <label>
          2. Which programming language do you prefer?
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="JavaScript"
            checked={language === "JavaScript"}
            onChange={(e) => setLanguage(e.target.value)}
          />
          JavaScript
        </label>
        <label>
          <input
            type="radio"
            value="Python"
            checked={language === "Python"}
            onChange={(e) => setLanguage(e.target.value)}
          />
          Python
        </label>
        <br />
        <label>
          3. Which season do you like the most?
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Summer"
            checked={season === "Summer"}
            onChange={(e) => setSeason(e.target.value)}
          />
          Summer
        </label>
        <label>
          <input
            type="radio"
            value="Winter"
            checked={season === "Winter"}
            onChange={(e) => setSeason(e.target.value)}
          />
          Winter
        </label>
        <br />
        <label>
          4. Which continent would you like to visit?
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Europe"
            checked={continent === "Europe"}
            onChange={(e) => setContinent(e.target.value)}
          />
          Europe
        </label>
        <label>
          <input
            type="radio"
            value="Asia"
            checked={continent === "Asia"}
            onChange={(e) => setContinent(e.target.value)}
          />
          Asia
        </label>
        <br />
        <label>
          5. What is your favorite drink?
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Coffee"
            checked={drink === "Coffee"}
            onChange={(e) => setDrink(e.target.value)}
          />
          Coffee
        </label>
        <label>
          <input
            type="radio"
            value="Tea"
            checked={drink === "Tea"}
            onChange={(e) => setDrink(e.target.value)}
          />
          Tea
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SurveyForm;
