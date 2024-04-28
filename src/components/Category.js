import { Row, Col } from "react-bootstrap";
import { Roll } from "react-reveal";

function Category({ filterbycategory, allCategory }) {
  // to filter by category
  const onFilter = (cat) => {
    filterbycategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="justify-content-center d-flex">
        <Roll>
          {allCategory.length > 0
            ? allCategory.map((cat) => {
                return (
                  <div>
                    <button
                      onClick={() => onFilter(cat)}
                      className="btn mx-2"
                      style={{ border: "1px solid #b45b35" }}
                    >
                      {cat}
                    </button>
                  </div>
                );
              })
            : null}
        </Roll>
      </Col>
    </Row>
  );
}

export default Category;
