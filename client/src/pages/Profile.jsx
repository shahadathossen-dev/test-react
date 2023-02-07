import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { getCategories } from "../Api/CategoriesApi";
import { updateUser } from "../Api/UsersApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();
  const categorySelector = useRef();
  const { user, setUser } = useAuth();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getCategories().then(async (result) => {
      const mappedCategories = await result.filter((category) => {
        if (!category.category) {
          const subCategories = result.filter((subCategory) => {
            if (subCategory.category == category._id) {
              const subSubCategories = result.filter((subSubCategory) => {
                if (subSubCategory.category == subCategory._id) {
                  return subSubCategory;
                }
              });
              subCategory.subCategories = subSubCategories.length
                ? subSubCategories
                : [];
              return subCategory;
            }
          });
          category.subCategories = subCategories.length ? subCategories : [];
          return category;
        }
      });
      setCategories(mappedCategories);
    });

    if (user) {
      setName(user.name);
      setCategory(user.category);
      setAgreeToTerms(user.agreeToTerms);
    }
  }, [navigate]);

  useEffect(() => {
    setCategory(categorySelector.current.value);
  }, [categories]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = await updateUser({
        id: user._id,
        name,
        category,
        agreeToTerms,
      });
      setUser(data.record);
      toast(data.message)
      navigate('/');
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  return (
    <Container className="flex-grow-1 d-flex justify-content-center p-5">
      <Row>
        <Col>
          <Form className="card w-100" onSubmit={handleUpdate}>
            <Card.Header>
              <p className="text-center">
                Please enter your name and pick the Sectors you are currently
                involved in .
              </p>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <Form.Text className="text-muted">{errors.name}</Form.Text>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3 tt-select"
                controlId="formBasicSelect"
              >
                <Form.Select
                  ref={categorySelector}
                  aria-label="Default select example"
                  onChange={(e) => setCategory(e.target.value)}
                  defaultValue={category}
                >
                  {categories.map((category) => {
                    return (
                      <optgroup key={category._id} label={category.name}>
                        {category.subCategories.map((subCategory) => {
                          return (
                            <>
                              <option
                                className={
                                  !!subCategory.subCategories.length
                                    ? "subcategory fw-bold"
                                    : ""
                                }
                                disabled={!!subCategory.subCategories.length}
                                value={subCategory._id}
                                key={subCategory._id}
                              >
                                {subCategory.name}
                              </option>
                              {subCategory.subCategories.map(
                                (subSubCategory) => {
                                  return (
                                    <option
                                      key={subSubCategory._id}
                                      value={subCategory._id}
                                      className="ps-4 subsubcategory"
                                    >
                                      &nbsp; &nbsp; {subSubCategory.name}
                                    </option>
                                  );
                                }
                              )}
                            </>
                          );
                        })}
                      </optgroup>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Agree to Terms"
                  onChange={(e) => setAgreeToTerms(!agreeToTerms)}
                  defaultChecked={user?.agreeToTerms}
                />
                {errors.agreeToTerms && (
                  <Form.Text className="text-muted">{errors.agreeToTerms}</Form.Text>
                )}
              </Form.Group>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Card.Footer>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
