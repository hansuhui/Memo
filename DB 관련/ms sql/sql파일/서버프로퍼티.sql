select SERVERPROPERTY ('BuildClrVersion')  -- Microsoft .NET Framework CLR(���� ��� ��Ÿ��)�� ����
select SERVERPROPERTY ('Collation') --  ������ �⺻ ������ ���� �̸�
select SERVERPROPERTY ('CollationID')   --  ������ �⺻ ������ ���� ���̵�
select SERVERPROPERTY ('ComparisonStyle')  --  ������ ���� ��Ÿ��
select SERVERPROPERTY ('ComputerNamePhysicalNetBIOS')  --  SQL Server �ν��Ͻ��� ���� ����ǰ� �ִ� ���� ��ǻ���� NetBIOS �̸�
select SERVERPROPERTY ('Edition')  --  SQL Server �ν��Ͻ��� ��ġ�� ��ǰ ����
select SERVERPROPERTY ('EditionID')  --  SQL Server �ν��Ͻ��� ��ġ�� ��ǰ ���� ���̵�
select SERVERPROPERTY ('EngineEdition')  --  ������ ��ġ�� SQL Server �ν��Ͻ��� �����ͺ��̽� ���� ����
select SERVERPROPERTY ('HadrManagerStatus')  --  ���뼺 �׷� �����ڰ� ���۵Ǿ����� ����
select SERVERPROPERTY ('InstanceName')  --  ����ڰ� ����� �ν��Ͻ��� �̸�
select SERVERPROPERTY ('IsClustered')  --  ���� �ν��Ͻ��� ��� ��ġ(failover) Ŭ�����Ϳ� �����Ǿ� �ִ��� ǥ��
select SERVERPROPERTY ('IsFullTextInstalled')  --  ��ü �ؽ�Ʈ �� �ǹ� ü�� �ε��� ���� ��� ��ġ ����
select SERVERPROPERTY ('IsHadrEnabled')  --  ���뼺 �׷� ��� ����
select SERVERPROPERTY ('IsIntegratedSecurityOnly')  --  ���� ���� ��� ��� ����
select SERVERPROPERTY ('IsLocalDB')  --  SQL Server Express LocalDB�� �ν��Ͻ�
select SERVERPROPERTY ('IsSingleUser')  --  ���� ����� ��� ����
select SERVERPROPERTY ('IsXTPSupported')  --  �޸� OLTP�� ���� ����
select SERVERPROPERTY ('MachineName')  --  ���� �ν��Ͻ��� ���� ���� ��ǻ�� �̸�
select SERVERPROPERTY ('ProcessID')  --  SQL Server ������ ���μ��� ���̵�
select SERVERPROPERTY ('ProductVersion')  --  SQL Server ��ǰ ����
select SERVERPROPERTY ('ProductLevel')  --  SQL Server �ν��Ͻ��� ���� ����
select SERVERPROPERTY ('ResourceLastUpdateDateTime')  --  ���ҽ� �����ͺ��̽��� ���������� ������Ʈ�� ��¥
select SERVERPROPERTY ('ResourceVersion')  --  ���ҽ� �����ͺ��̽� ����
select SERVERPROPERTY ('ServerName')  --  Windows ���� �� ������ SQL Server �ν��Ͻ��� ���� �ν��Ͻ� ����
select SERVERPROPERTY ('SqlCharSet')  --  SQL ���� ���� ���̵�
select SERVERPROPERTY ('SqlCharSetName')  --  SQL ���� ���� �̸�
select SERVERPROPERTY ('SqlSortOrder')  --  SQL ���� ���� ���̵�
select SERVERPROPERTY ('SqlSortOrderName')  --  SQL ���� ���� �̸�
select SERVERPROPERTY ('FilestreamShareName')  --  FILESTREAM�� ����ϴ� ������
select SERVERPROPERTY ('FilestreamConfiguredLevel')  --  FILESTREAM�׼��� ����
select SERVERPROPERTY ('FilestreamEffectiveLevel')  --  ��ȿ�� FILESTREAM �׼��� ����