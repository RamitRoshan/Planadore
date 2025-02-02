import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, Typography, Stack, Alert, Paper, Container, Fade, Grow } from "@mui/material";
import { FaEye, FaEdit, FaUserCog, FaFilePdf, FaFileExcel } from "react-icons/fa";

const EmployeeDirectory = () => {
  const [employees] = useState([
    { id: 1, name: "John Smith", email: "john.smith@company.com", phone: "123-456-7890", employeeCode: "EMP001", role: "Developer", status: "Active" },
    { id: 2, name: "Sarah Johnson", email: "sarah.j@company.com", phone: "234-567-8901", employeeCode: "EMP002", role: "Designer", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael.b@company.com", phone: "345-678-9012", employeeCode: "EMP003", role: "Manager", status: "Inactive" },
    { id: 4, name: "Emily Davis", email: "emily.d@company.com", phone: "456-789-0123", employeeCode: "EMP004", role: "Developer", status: "Probation" },
    { id: 5, name: "James Wilson", email: "james.w@company.com", phone: "567-890-1234", employeeCode: "EMP005", role: "Designer", status: "Active" }
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const [newStatus, setNewStatus] = useState("");
  const [error, setError] = useState(null);

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
    setViewModalOpen(true);
  };

  const handleUpdateClick = (employee) => {
    setSelectedEmployee(employee);
    setUpdatedData(employee);
    setUpdateModalOpen(true);
  };

  const handleStatusClick = (employee) => {
    setSelectedEmployee(employee);
    setNewStatus(employee.status);
    setStatusModalOpen(true);
  };

  const handleUpdateSubmit = () => {
    console.log("Updated Data:", updatedData);
    setUpdateModalOpen(false);
  };

  const handleStatusSubmit = () => {
    console.log("New Status:", newStatus);
    setStatusModalOpen(false);
  };

  const handleDownloadPDF = () => {
    console.log("Downloading PDF...");
  };

  const handleDownloadExcel = () => {
    console.log("Downloading Excel...");
  };

  const CustomNoRowsOverlay = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#fafafa"
      }}
    >
      <Typography variant="h6" color="text.secondary" gutterBottom>
        No Employee Data Found
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Please add employees to view them in the directory
      </Typography>
    </Box>
  );

  const columns = [
    { field: "id", headerName: "S.No", width: 100, headerAlign: "center", align: "center" },
    { field: "name", headerName: "Name", width: 180, headerAlign: "center", align: "center" },
    { field: "email", headerName: "Email", width: 220, headerAlign: "center", align: "center" },
    { field: "phone", headerName: "Phone", width: 150, headerAlign: "center", align: "center" },
    { field: "employeeCode", headerName: "Emp Code", width: 130, headerAlign: "center", align: "center" },
    { field: "role", headerName: "Role", width: 130, headerAlign: "center", align: "center" },
    { 
      field: "status", 
      headerName: "Status", 
      width: 130,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Typography
          sx={{
            color: params.value === "Active" ? "#4caf50" :
                  params.value === "Inactive" ? "#f44336" : "#ff9800",
            fontWeight: "bold",
            padding: "4px 12px",
            borderRadius: "12px",
            backgroundColor: params.value === "Active" ? "#e8f5e9" :
                           params.value === "Inactive" ? "#ffebee" : "#fff3e0",
            marginTop: "8px",
            marginBottom: "8px"
          }}
        >
          {params.value}
        </Typography>
      )
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Stack 
          direction="row" 
          spacing={1}
          sx={{ 
            paddingY: "8px"
          }}
        >
          <Button
            variant="contained"
            size="small"
            startIcon={<FaEye />}
            onClick={() => handleViewClick(params.row)}
            sx={{ 
              bgcolor: "#2196f3",
              "&:hover": { bgcolor: "#1976d2", transform: "scale(1.05)" },
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            View
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<FaEdit />}
            onClick={() => handleUpdateClick(params.row)}
            sx={{ 
              bgcolor: "#4caf50",
              "&:hover": { bgcolor: "#388e3c", transform: "scale(1.05)" },
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<FaUserCog />}
            onClick={() => handleStatusClick(params.row)}
            sx={{ 
              bgcolor: "#ff9800",
              "&:hover": { bgcolor: "#f57c00", transform: "scale(1.05)" },
              transition: "all 0.3s ease",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            Status
          </Button>
        </Stack>
      )
    }
  ];

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography 
            variant="h4" 
            align="left"
            sx={{ 
              color: "#1976d2",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              width: "auto"
            }}
          >
            Employee Directory
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={<FaFilePdf />}
              onClick={handleDownloadPDF}
              sx={{ 
                bgcolor: "#f44336",
                "&:hover": { bgcolor: "#d32f2f", transform: "scale(1.05)" },
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "180px",
                height: "45px"
              }}
            >
              Download PDF
            </Button>
            <Button
              variant="contained"
              startIcon={<FaFileExcel />}
              onClick={handleDownloadExcel}
              sx={{ 
                bgcolor: "#4caf50",
                "&:hover": { bgcolor: "#388e3c", transform: "scale(1.05)" },
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                minWidth: "180px",
                height: "45px"
              }}
            >
              Download Excel
            </Button>
          </Stack>
        </Box>

        <Paper 
          elevation={3} 
          sx={{ 
            height: 350,
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
          }}
        >
          <DataGrid
            rows={employees}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            components={{
              NoRowsOverlay: CustomNoRowsOverlay
            }}
            sx={{ 
              backgroundColor: "white",
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f5f5f5",
                borderBottom: "2px solid #e0e0e0"
              },
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: "#fafafa"
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#f5f5f5"
              },
              "& .MuiDataGrid-cell": {
                borderColor: "#f0f0f0",
                paddingTop: "8px",
                paddingBottom: "8px"
              }
            }}
          />
        </Paper>
        
        <Dialog 
          open={viewModalOpen} 
          onClose={() => setViewModalOpen(false)} 
          maxWidth="sm" 
          fullWidth
          TransitionComponent={Fade}
          transitionDuration={300}
        >
          <DialogTitle sx={{ bgcolor: "#2196f3", color: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>Employee Details</DialogTitle>
          <DialogContent>
            {selectedEmployee && (
              <Box sx={{ mt: 3 }}>
                <Paper elevation={2} sx={{ p: 3, backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                  <Stack spacing={2}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, borderBottom: "1px solid #e0e0e0" }}>
                      <Typography variant="subtitle1"><strong>Name:</strong></Typography>
                      <Typography>{selectedEmployee.name}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, borderBottom: "1px solid #e0e0e0" }}>
                      <Typography variant="subtitle1"><strong>Email:</strong></Typography>
                      <Typography>{selectedEmployee.email}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, borderBottom: "1px solid #e0e0e0" }}>
                      <Typography variant="subtitle1"><strong>Phone:</strong></Typography>
                      <Typography>{selectedEmployee.phone}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, borderBottom: "1px solid #e0e0e0" }}>
                      <Typography variant="subtitle1"><strong>Emp Code:</strong></Typography>
                      <Typography>{selectedEmployee.employeeCode}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, borderBottom: "1px solid #e0e0e0" }}>
                      <Typography variant="subtitle1"><strong>Role:</strong></Typography>
                      <Typography>{selectedEmployee.role}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1 }}>
                      <Typography variant="subtitle1"><strong>Status:</strong></Typography>
                      <Typography 
                        sx={{ 
                          color: selectedEmployee.status === "Active" ? "#4caf50" : 
                                selectedEmployee.status === "Inactive" ? "#f44336" : "#ff9800",
                          fontWeight: "bold",
                          padding: "4px 12px",
                          borderRadius: "12px",
                          backgroundColor: selectedEmployee.status === "Active" ? "#e8f5e9" :
                                         selectedEmployee.status === "Inactive" ? "#ffebee" : "#fff3e0"
                        }}
                      >
                        {selectedEmployee.status}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={() => setViewModalOpen(false)}
              sx={{ 
                color: "#2196f3",
                "&:hover": { backgroundColor: "#e3f2fd" }
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog 
          open={updateModalOpen} 
          onClose={() => setUpdateModalOpen(false)} 
          maxWidth="sm" 
          fullWidth
          TransitionComponent={Fade}
          transitionDuration={300}
        >
          <DialogTitle sx={{ bgcolor: "#4caf50", color: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>Update Employee Details</DialogTitle>
          <DialogContent>
            <Box sx={{ mt: 3 }}>
              <Paper elevation={2} sx={{ p: 3, backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={updatedData.name || ""}
                    onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
                    variant="outlined"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    value={updatedData.email || ""}
                    onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
                    variant="outlined"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    value={updatedData.phone || ""}
                    onChange={(e) => setUpdatedData({ ...updatedData, phone: e.target.value })}
                    variant="outlined"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                  />
                  <TextField
                    fullWidth
                    label="Emp Code"
                    value={updatedData.employeeCode || ""}
                    onChange={(e) => setUpdatedData({ ...updatedData, employeeCode: e.target.value })}
                    variant="outlined"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                  />
                  <TextField
                    fullWidth
                    label="Role"
                    value={updatedData.role || ""}
                    onChange={(e) => setUpdatedData({ ...updatedData, role: e.target.value })}
                    variant="outlined"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
                  />
                </Stack>
              </Paper>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={() => setUpdateModalOpen(false)}
              sx={{ color: "#666" }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleUpdateSubmit} 
              variant="contained" 
              color="success"
              sx={{ 
                "&:hover": { transform: "scale(1.05)" },
                transition: "all 0.3s ease"
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog 
          open={statusModalOpen} 
          onClose={() => setStatusModalOpen(false)} 
          maxWidth="sm" 
          fullWidth
          TransitionComponent={Fade}
          transitionDuration={300}
        >
          <DialogTitle sx={{ bgcolor: "#ff9800", color: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>Update Employee Status</DialogTitle>
          <DialogContent>
            <Box sx={{ mt: 3 }}>
              <Paper elevation={2} sx={{ p: 3, backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={newStatus}
                    label="Status"
                    onChange={(e) => setNewStatus(e.target.value)}
                    sx={{ borderRadius: "8px" }}
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                    <MenuItem value="Probation">Probation</MenuItem>
                  </Select>
                </FormControl>
              </Paper>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={() => setStatusModalOpen(false)}
              sx={{ color: "#666" }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleStatusSubmit} 
              variant="contained" 
              sx={{ 
                bgcolor: "#ff9800",
                "&:hover": { bgcolor: "#f57c00", transform: "scale(1.05)" },
                transition: "all 0.3s ease"
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Fade>
  );
};

export default EmployeeDirectory;