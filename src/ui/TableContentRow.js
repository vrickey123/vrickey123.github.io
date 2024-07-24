import { Row, Col, Table } from 'react-bootstrap'

function TableContentRow(props) {
    // https://stackoverflow.com/a/37600679
    let tableRows = [];
    props.tableContent.getItems().forEach((item, index) => {
        tableRows.push(
            <tr key={index}>
                <td>{item.getDomain()}</td>
                <td>{item.getTechnical()}</td>
                <td>{item.getImpact()}</td>
                <td>{item.getResult()}</td>
            </tr>
        )
    });
    return (
        <Row className="mb-5 mt-5">
            <Col>
                <h1>{props.title}</h1>
                <h2 className="text-muted">{props.subtitle}</h2>
                <p class="lead"><a href={props.summary[0].getLink()}>{props.summary[0].getAnchor()}</a>{props.summary[0].getText()}</p> 
                <p>{props.summary[1]}</p>
                <p>{props.summary[2]}</p>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>{props.tableContent.getHeader().getDomain()}</th>
                            <th>{props.tableContent.getHeader().getTechnical()}</th>
                            <th>{props.tableContent.getHeader().getImpact()}</th>
                            <th>{props.tableContent.getHeader().getResult()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default TableContentRow;