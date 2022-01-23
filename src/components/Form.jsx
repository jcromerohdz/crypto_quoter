import styled from "@emotion/styled";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;

  &:hover{
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

const Form = () => {
  return (
    <form>

      <form>
        <InputSubmit type="submit" value="Quote" />
      </form>
    </form>
  )
}

export default Form;