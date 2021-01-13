const data = {
  ID: '5ffa709213c2f569b89a0deb',
  CreatedOn: '0001-01-01T00:00:00Z',
  CreatedBy: {
    ID: '5ffa754760e78d0addc0dde3',
    FullName: 'John Doe',
  },
  Name:
    "An interface variable can be used to store any value that conforms to the interface, and call methods that art part of that interface. Note that you won't be able to access fields on the underlying value through an interface variable.",
  Description:
    "In this case, your SearchItemsByUser method returns an interface{} value (i.e. the empty interface), which can hold any value but doesn't provide any direct access to that value. You can extract the dynamic value held by the interface variable through a type assertion, like so:",
  TaskTemplateID: '5ffa709213c2f569b89a0dee',
  Active: true,
  StartDate: '2021-01-10T03:12:18.547Z',
  EndDate: '2021-01-10T03:12:18.547Z',
  CompleteTime: '1900-01-01',
  CurrentStep: 1,
  AssignedBy: {
    ID: '5ffa709213c2f569b89a0def',
    FullName: 'Operator 1',
  },
  AssignedUsers: [
    {
      ID: '5ffa709213c2f569b89a0def',
      FullName: 'John Doe',
    },
    {
      ID: '5ffa709213c2f569b89a0def',
      FullName: 'Jane Smith',
    },
  ],
  Steps: [
    {
      Instruction: 'Instruction 1',
      Description: 'Description 1',
      EquiqmentInfo: {
        ID: '5ffbcfe57de1e2f38b817115',
        Description: 'Description 1',
        Model: 'model 1',
        SerialNumber: '1234324',
        QR: '12312312',
      },
      FirstScan: '2021-01-11T04:11:17.941Z',
      SecondScan: '2021-01-11T04:11:17.941Z',
      FirstScanBy: {
        ID: '5ffbcfe57de1e2f38b817118',
        FullName: 'John Doe',
      },
      SecondScanBy: {
        ID: '5ffbcfe57de1e2f38b817119',
        FullName: 'John Doe',
      },
    },
    {
      Instruction: 'Instruction 2',
      Description: 'Description 2',
      EquiqmentInfo: {
        ID: '5ffbcfe57de1e2f38b817115',
        Description: 'Description 1',
        Model: 'model 1',
        SerialNumber: '1234324',
        QR: '12312312',
      },
      FirstScan: '2021-01-11T04:11:17.941Z',
      SecondScan: '2021-01-11T04:11:17.941Z',
      FirstScanBy: {
        ID: '5ffbcfe57de1e2f38b817118',
        FullName: 'John Doe',
      },
      SecondScanBy: {
        ID: '5ffbcfe57de1e2f38b817119',
        FullName: 'John Doe',
      },
    },
  ],
}
