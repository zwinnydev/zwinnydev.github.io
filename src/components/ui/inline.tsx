import { PropsWithChildren } from "react";

const Inline = ({children}: PropsWithChildren) =>
    <div style={{display: 'flex', gap: '8px'}}>{children}</div>

export default Inline;