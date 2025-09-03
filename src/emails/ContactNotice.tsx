type Props = {
    name: string; company: string; email: string; phone?: string;
    interest?: string; message?: string;
  };
  
  export default function ContactNotice(props: Props) {
    const Row = ({ label, value }: { label: string; value?: string }) =>
      value ? (
        <tr>
          <td style={{ padding: "6px 0", color: "#334155" }}><b>{label}:</b></td>
          <td style={{ padding: "6px 0", color: "#0f172a" }}>{value}</td>
        </tr>
      ) : null;
  
    return (
      <div style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" }}>
        <h2 style={{ color: "#0E3A8A", margin: "0 0 8px" }}>Nueva solicitud de demo</h2>
        <p style={{ margin: "0 0 16px", color: "#334155" }}>
          Te dejaron sus datos desde el formulario de contacto.
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <Row label="Nombre" value={props.name}/>
            <Row label="Empresa" value={props.company}/>
            <Row label="Email" value={props.email}/>
            <Row label="Teléfono" value={props.phone}/>
            <Row label="Interés" value={props.interest}/>
            <Row label="Mensaje" value={props.message}/>
          </tbody>
        </table>
      </div>
    );
  }