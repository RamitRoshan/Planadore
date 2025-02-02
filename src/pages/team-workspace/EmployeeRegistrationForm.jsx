import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaUser, FaEnvelope, FaPhone, FaMapMarker, FaCalendar, FaCreditCard, FaBuilding, FaRupeeSign, FaTrash } from "react-icons/fa";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  width: "90%",
  maxHeight: "90vh",
  overflowY: "auto"
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  background: "linear-gradient(to right bottom, #ffffff, #f8f9fa)"
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    height: "56px"
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    height: "56px"
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  padding: "12px 24px",
  textTransform: "none",
  fontWeight: 600,
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "translateY(-2px)"
  }
}));

const EmployeeRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfJoining: null,
    systemRole: "",
    professionalRole: "",
    aadhaarNumber: "",
    panNumber: "",
    bankAccountNumber: "",
    bankName: "",
    ifscCode: "",
    salary: "",
    branchAddress: ""
  });

  const [errors, setErrors] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setOpenModal(true);
    }
  };

  const handleConfirm = () => {
    setOpenModal(false);
    setTimeout(() => {
      setDialogMessage("Employee registration successful!");
      setOpenDialog(true);
    }, 1000);
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleClearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      dateOfJoining: null,
      systemRole: "",
      professionalRole: "",
      aadhaarNumber: "",
      panNumber: "",
      bankAccountNumber: "",
      bankName: "",
      ifscCode: "",
      salary: "",
      branchAddress: ""
    });
    setErrors({});
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <StyledPaper elevation={3}>
        <Typography 
          variant="h4" 
          gutterBottom 
          align="center"
          sx={{
            fontWeight: 600,
            color: "#1976d2",
            mb: 4,
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 4,
              backgroundColor: "#1976d2",
              borderRadius: 2
            }
          }}
        >
          Employee Registration
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="First Name"
              value={formData.firstName}
              onChange={handleInputChange("firstName")}
              InputProps={{
                startAdornment: <FaUser style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="Last Name"
              value={formData.lastName}
              onChange={handleInputChange("lastName")}
              InputProps={{
                startAdornment: <FaUser style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="Email"
              value={formData.email}
              onChange={handleInputChange("email")}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: <FaEnvelope style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="Phone"
              value={formData.phone}
              onChange={handleInputChange("phone")}
              error={!!errors.phone}
              helperText={errors.phone}
              InputProps={{
                startAdornment: <FaPhone style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Address"
              value={formData.address}
              onChange={handleInputChange("address")}
              multiline
              rows={2}
              InputProps={{
                startAdornment: <FaMapMarker style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Date of Joining"
                  value={formData.dateOfJoining}
                  onChange={(newValue) => {
                    setFormData({ ...formData, dateOfJoining: newValue });
                  }}
                  sx={{ width: "100%" }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} sm={3}>
            <StyledFormControl fullWidth>
              <InputLabel>System Role</InputLabel>
              <Select
                value={formData.systemRole}
                onChange={handleInputChange("systemRole")}
                label="System Role"
              >
                <MenuItem value="ADMIN">ADMIN</MenuItem>
                <MenuItem value="USER">USER</MenuItem>
              </Select>
            </StyledFormControl>
          </Grid>

          <Grid item xs={12} sm={3}>
            <StyledFormControl fullWidth>
              <InputLabel>Professional Role</InputLabel>
              <Select
                value={formData.professionalRole}
                onChange={handleInputChange("professionalRole")}
                label="Professional Role"
              >
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="Sales-Agent">Sales Agent</MenuItem>
                <MenuItem value="Operation-Head">Operation Head</MenuItem>
              </Select>
            </StyledFormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="Aadhaar Number"
              value={formData.aadhaarNumber}
              onChange={handleInputChange("aadhaarNumber")}
              InputProps={{
                startAdornment: <FaCreditCard style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="PAN Number"
              value={formData.panNumber}
              onChange={handleInputChange("panNumber")}
              InputProps={{
                startAdornment: <FaCreditCard style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="Bank Account Number"
              value={formData.bankAccountNumber}
              onChange={handleInputChange("bankAccountNumber")}
              InputProps={{
                startAdornment: <FaBuilding style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="Bank Name"
              value={formData.bankName}
              onChange={handleInputChange("bankName")}
              InputProps={{
                startAdornment: <FaBuilding style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="IFSC Code"
              value={formData.ifscCode}
              onChange={handleInputChange("ifscCode")}
              InputProps={{
                startAdornment: <FaBuilding style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <StyledTextField
              fullWidth
              label="Salary"
              type="number"
              value={formData.salary}
              onChange={handleInputChange("salary")}
              InputProps={{
                startAdornment: <FaRupeeSign style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Branch Address"
              value={formData.branchAddress}
              onChange={handleInputChange("branchAddress")}
              multiline
              rows={3}
              InputProps={{
                startAdornment: <FaMapMarker style={{ marginRight: 8, color: "#666" }} />
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2 }}>
              <StyledButton
                variant="outlined"
                color="error"
                size="large"
                onClick={handleClearForm}
                startIcon={<FaTrash />}
              >
                Clear Form
              </StyledButton>
              <StyledButton
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSubmit}
              >
                Register Employee
              </StyledButton>
            </Box>
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledModal open={openModal} onClose={() => setOpenModal(false)}>
        <StyledCard>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ color: "#1976d2", fontWeight: 600 }}>
              Confirm Employee Details
            </Typography>
            <Divider sx={{ my: 2 }} />
            {Object.entries(formData).map(([key, value]) => (
              <Typography key={key} variant="body1" gutterBottom sx={{ color: "#555" }}>
                <strong>{key.replace(/([A-Z])/g, " $1").toLowerCase()}:</strong>{" "}
                {value?.toString() || ""}
              </Typography>
            ))}
            <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <StyledButton variant="outlined" onClick={() => setOpenModal(false)}>
                Cancel
              </StyledButton>
              <StyledButton variant="contained" color="primary" onClick={handleConfirm}>
                Confirm
              </StyledButton>
            </Box>
          </CardContent>
        </StyledCard>
      </StyledModal>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle sx={{ color: "#1976d2" }}>Registration Status</DialogTitle>
        <DialogContent>
          <Typography>{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EmployeeRegistrationForm;