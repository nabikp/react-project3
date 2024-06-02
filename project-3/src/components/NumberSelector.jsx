import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  console.log(selectedNumber);

  return (
    <>
      <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
          {" "}
          {arrayNumber.map((value, i) => (
            <Box
              isSelected={value === selectedNumber}
              key={i}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
        {/* <Box>1</Box> */}
        {/* <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box> */}
      </NumberSelectorContainer>
    </>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
