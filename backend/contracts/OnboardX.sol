// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./interfaces/IERC20.sol";

contract OnboardX {
    address owner;
    address tokenAddress;

    constructor (address _tokenAddress) {
        owner = msg.sender;
        tokenAddress = _tokenAddress;
    }
    // Data structure
    enum EmploymentStatus { parttime, fulltime }
    struct Company {
        string name;
        string reg_no;
        bool active;
    }

    struct Employee {
        string name;
        string role;
        uint256 payment;
        bool active;
        bool confirmed;
        bool releaseFunds;
        address employeeAddress;
        EmploymentStatus status;
    }

    mapping (address => Company) companies;
    mapping (address => Employee[]) companyEmployees;
    mapping (address => Employee) employees;
    mapping (address => Company[]) getAllCompanies;

    modifier onlyCompany {
        require(companies[msg.sender].active == true, "Only active company can onboard employee");
        _;
    }

    modifier onlyEmployee {
        require(employees[msg.sender].active == true, "Only active employees can request payment");
        _;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only the admin can call this function");
        _;
    }

    function registerCompany(string memory name, string memory reg_no) external {
        require(companies[msg.sender].active != true, "Cannot onbaord company twice");
        Company memory company = Company({
            name: name,
            reg_no: reg_no,
            active: true
        });

        companies[msg.sender] = company;
        getAllCompanies[owner].push(company);
    }

    function onboardEmployee(
        string memory name,
        string memory role,
        uint256 payment,
        address employeeAddress,
        EmploymentStatus status
    ) external onlyCompany {
        Employee memory employee = Employee({
            name: name,
            role: role,
            payment: payment,
            active: true,
            confirmed: false,
            releaseFunds: false,
            employeeAddress: employeeAddress,
            status: status
        });

        // IERC20(tokenAddress).approve(address(this), payment);
        // IERC20(tokenAddress).transferFrom(msg.sender, address(this), payment);

        companyEmployees[msg.sender].push(employee);
        employees[employeeAddress] = employee;
    }


    function requestPayment() external onlyEmployee {
        uint256 amount = employees[msg.sender].payment;
        IERC20(tokenAddress).transfer(msg.sender, amount);
    }

    function confirmTaskCompletion() external onlyEmployee {
        employees[msg.sender].confirmed = true;
    }

    function releaseFunds(address _employee) external onlyCompany {
        employees[_employee].releaseFunds = true;
    }

    // getter functions
    function getEmployees() external view onlyCompany returns(Employee[] memory employeesDetails) {
        employeesDetails = companyEmployees[msg.sender];
    }
    
    function getEmployee() external view onlyEmployee returns(Employee memory employeeDetails) {
        employeeDetails = employees[msg.sender];
    }

    function getAllCompaniesData() external view onlyOwner returns(Company[] memory companyDetails) {
        companyDetails = getAllCompanies[owner];
    }
    
}
