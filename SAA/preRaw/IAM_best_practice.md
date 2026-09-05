## IAM Best Practices

### IAM Best Practices

Here are some general guidelines on IAM and best practices to help you avoid mistakes when using AWS.

- Do not use the root account except when you set up your AWS account. By now, you should have two accounts: a root account and your own personal account.

- Remember, one AWS user corresponds to one physical user. If a friend wants to use AWS, do not give them your credentials. Instead, create another user for them.

- You can assign users to groups and assign permissions to groups to ensure that security is managed at the group level. Additionally, you should create a strong password policy.

- Also, if possible, use and enforce multi-factor authentication (MFA) to guarantee that your account is safer from hackers.

- You should create and use roles whenever you are giving permissions to AWS services, including EC2 instances, which are virtual servers.

- If you use AWS programmatically or via the CLI or SDK, you must generate access keys. These access keys are like passwords and are very secret, so keep them for yourself.

- To edit the permissions of your account, you can use the IAM credentials reports or the IAM Access Advisor feature.

- Finally, never share your IAM users and access keys. This is very important for your account's security.

This concludes the section on IAM. You now know everything about IAM best practices. See you in the next lecture.

Key Takeaways
- Avoid using the root account except during initial AWS account setup.
- Create individual IAM users for each physical user instead of sharing credentials.
- Manage security by assigning users to groups and applying permissions at the group level.
- Enforce strong password policies and use multi-factor authentication (MFA) to enhance account security.
- Use IAM roles when granting permissions to AWS services, including EC2 instances.
- Keep access keys confidential and never share IAM user credentials or access keys.