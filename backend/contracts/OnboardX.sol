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
    enum EmploymentStatus { parttime, fulltime, contract_type }
    struct Company {
        string name;
        string reg_no;
        bool active;
    }

    struct Employee {
        string name;
        string role;
        uint32 payment;
        bool active;
        address employeeAddress;
        EmploymentStatus status;
    }

    mapping (address => Company) companies;
    mapping (address => Employee[]) companyEmployees;
    mapping (address => Employee) employees;

    modifier onlyCompany {
        require(companies[msg.sender].active == true, "Only active company can onboard employee");
        _;
    }

    modifier onlyEmployee {
        require(employees[msg.sender].active == true, "Only active employees can request payment");
        _;
    }

    function registerCompany(string memory name, string memory reg_no) external {
        Company memory company = Company({
            name: name,
            reg_no: reg_no,
            active: true
        });

        companies[msg.sender] = company;
    }

    function onboardEmployee(
        string memory name,
        string memory role,
        uint32 payment,
        address employeeAddress,
        EmploymentStatus status
    ) external onlyCompany {
        Employee memory employee = Employee({
            name: name,
            role: role,
            payment: payment,
            active: true,
            employeeAddress: employeeAddress,
            status: status
        });

        companyEmployees[msg.sender].push(employee);
        employees[employeeAddress] = employee;
    }


    function requestPayment() external onlyEmployee {
        uint32 amount = employees[msg.sender].payment;
        IERC20(tokenAddress).transfer(msg.sender, amount);
    }

    // getter functions
    function getEmployees() external onlyCompany {
        
    }
    
}
