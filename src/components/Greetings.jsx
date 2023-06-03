function Greetings({ name, age, jobs }) {
  return (
    <>
      <h1>Hello {name}</h1>
      <h1>I am {age} years old!</h1>
      <p>I am a {jobs.join(" / ")}</p>
    </>
  );
}
export default Greetings;
