import { styled } from "@mui/system";

const Spacer: React.FC<{ height: number | string }> = ({ height }) => (
  <div style={{ width: "100%", minHeight: `${height}px` }} />
);

export default Spacer;
