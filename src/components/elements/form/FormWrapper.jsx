export default function FormWrapper({ children, handleSubmit, method }) {
  return (
    <div className="max-w-96">
      <form onSubmit={handleSubmit}>
        {children}
        <button type="submit">{method}</button>
      </form>
    </div>
  );
}
