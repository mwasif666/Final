import * as React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
// Menu
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import "./Responsive.css";
import Offcanvas from "react-bootstrap/Offcanvas";
// Add icons count

// import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// end
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import wasif from "./wasif.jpg";
import wasif_ava from "./wasif_ava.jpg";
import { Button, Row } from "react-bootstrap";

function Nav_Bar() {
  const [count, setCount] = React.useState(1);
  const [count1, setCount1] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [show, setShow] = useState(false);

  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);
  return (
    <>
      <section className="section">
        <Container>
          <div className="main">
            <div className="main1">
              <div className="box1">
                <i class="bi bi-telephone-fill"></i>
                <p id="phone">+92301 3769247</p>
                <p id="line">|</p>
              </div>
              <div className="box2">
                <i class="bi bi-envelope"></i>
                <p>mwasif66625426@gmail.com</p>
              </div>
            </div>
            <div className="main2">
              <div className="box3">
                <i class="bi bi-geo-alt"></i>
                <p id="location">Store Location</p>
                <p id="line">|</p>
              </div>
              <div className="box4">
                <i class="bi bi-person"></i>
                <p>Login or Register</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Navbar expand="lg" className="Navbar-home bord">
        <Container>
          <Button
            className="fa-solid fa-bars fa-bounce offcan-btn"
            onClick={handleShow1}
          ></Button>
          {/* <i class="fa-solid fa-bars fa-bounce"></i> */}

          <Offcanvas show={show} onHide={handleClose1} backdrop="static">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Link to="/" className="anchors">
                Home
              </Link>

              <Container className="g-card">
                <Link to="/" className="card-gift anchors">
                  Gift Card
                </Link>
                <Row className="gift-card">
                  <Card className="col-md-4">
                    <Card.Img className="card-img" variant="top" src={wasif} />
                  </Card>
                  <Card className="col-md-4">
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={wasif_ava}
                    />
                  </Card>
                  <Card className="col-md-4">
                    <Card.Img className="card-img" variant="top" src={wasif} />
                  </Card>
                </Row>
              </Container>

              <Link to="/About" className="anchors">
                About
              </Link>
              <Link to="/Contact" className="anchors anchor-contacts">
                Contact
              </Link>
            </Offcanvas.Body>
          </Offcanvas>
          <Link to="/" className="e-solution">
            <Navbar.Brand className="e-solution" href="#">
              e-Solution
            </Navbar.Brand>
          </Link>
          <Form className="Form-control m-auto">
            <input type="search" placeholder="Search" />
            <i class="bi bi-search"></i>
          </Form>
          <Box
            sx={{
              color: "action.active",
              display: "flex",
              flexDirection: "column",
              "& > *": {
                marginBottom: 2,
              },
              "& .MuiBadge-root": {
                marginRight: 4,
              },
            }}
          >
            <div className="icons-header">
              <Badge className="bad" badgeContent={count}>
                <i class="bi bi-suit-heart"></i>
              </Badge>
              <Badge className="bad" badgeContent={count1}>
                <i class="bi bi-bag"></i>
              </Badge>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar src={wasif_ava}></Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar src={wasif_ava}></Avatar> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar src={wasif_ava}></Avatar> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Container>
      </Navbar>
      {/* Wishlist */}
      {/* <ButtonGroup>
                <Button
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup> */}

      {/* Shopping */}

      {/* <ButtonGroup>
                <Button
                  aria-label="reduce"
                  onClick={() => {
                    setCount1(Math.max(count1 - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button
                  aria-label="increase"
                  onClick={() => {
                    setCount1(count1 + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup> */}

      <Navbar expand="lg" className="Navbar-home home2">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" className="toggle" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto linking">
              <Link to="/" className="anchors">
                Home
              </Link>

              <Container className="g-card">
                <Link to="/" className="card-gift anchors">
                  Gift Card
                </Link>
                <Row className="gift-card">
                  <Card className="col-md-4">
                    <Card.Img className="card-img" variant="top" src={wasif} />
                  </Card>
                  <Card className="col-md-4">
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={wasif_ava}
                    />
                  </Card>
                  <Card className="col-md-4">
                    <Card.Img className="card-img" variant="top" src={wasif} />
                  </Card>
                </Row>
              </Container>

              <Link to="/About" className="anchors">
                About
              </Link>
              <Link to="/Contact" className="anchors anchor-contacts">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Nav_Bar;
