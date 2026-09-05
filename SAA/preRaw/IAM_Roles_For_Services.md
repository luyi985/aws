## IAM Roles for AWS Services

### Introduction to IAM Roles

We need to discuss the last component of IAM, which is called IAM Roles. Some AWS services that we will be launching throughout this course need to perform actions on our behalf, on our account. To perform these actions, they require permissions just like users do. Therefore, we need to assign permissions to AWS services, and to do so, we create what is called an IAM Role.

IAM Roles are similar to users, but they are intended to be used not by physical people, but instead by AWS services. This concept might be a bit confusing. For example, throughout this course, we will create an EC2 Instance, which is essentially a virtual server. This EC2 Instance may want to perform some actions on AWS, and to do so, we need to grant permissions to our EC2 Instance.

To grant these permissions, we create an IAM Role, and together, the EC2 Instance and the IAM Role form one entity. When the EC2 Instance tries to access some information from AWS, it will use the IAM Role. If the permissions assigned to the IAM Role are correct, then the EC2 Instance will be able to access the resource or perform the call it is trying to make.

Some common IAM Roles include EC2 Instance roles, which I just described, but also roles for other AWS services that perform actions against AWS. For example, Lambda Function Roles or CloudFormation Roles. This is a high-level overview. In the next lecture, we will create a role, although we will not use it until the following section. Let's proceed to create a role in the next lecture.

### Key Takeaways

- IAM Roles allow AWS services to perform actions on your behalf by assigning permissions.

- IAM Roles function like users but are intended for AWS services, not physical people.

- EC2 Instances use IAM Roles to access AWS resources securely.

- Common IAM Roles include those for EC2 Instances, Lambda Functions, and CloudFormation.