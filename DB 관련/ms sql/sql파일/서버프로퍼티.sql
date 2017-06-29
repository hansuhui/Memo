select SERVERPROPERTY ('BuildClrVersion')  -- Microsoft .NET Framework CLR(공용 언어 런타임)의 버전
select SERVERPROPERTY ('Collation') --  서버의 기본 데이터 정렬 이름
select SERVERPROPERTY ('CollationID')   --  서버의 기본 데이터 정렬 아이디
select SERVERPROPERTY ('ComparisonStyle')  --  데이터 정렬 스타일
select SERVERPROPERTY ('ComputerNamePhysicalNetBIOS')  --  SQL Server 인스턴스가 현재 실행되고 있는 로컬 컴퓨터의 NetBIOS 이름
select SERVERPROPERTY ('Edition')  --  SQL Server 인스턴스의 설치된 제품 버전
select SERVERPROPERTY ('EditionID')  --  SQL Server 인스턴스의 설치된 제품 버전 아이디
select SERVERPROPERTY ('EngineEdition')  --  서버에 설치된 SQL Server 인스턴스의 데이터베이스 엔진 버전
select SERVERPROPERTY ('HadrManagerStatus')  --  가용성 그룹 관리자가 시작되었는지 여부
select SERVERPROPERTY ('InstanceName')  --  사용자가 연결된 인스턴스의 이름
select SERVERPROPERTY ('IsClustered')  --  서버 인스턴스가 장애 조치(failover) 클러스터에 구성되어 있는지 표시
select SERVERPROPERTY ('IsFullTextInstalled')  --  전체 텍스트 및 의미 체계 인덱싱 구성 요소 설치 여부
select SERVERPROPERTY ('IsHadrEnabled')  --  가용성 그룹 사용 여부
select SERVERPROPERTY ('IsIntegratedSecurityOnly')  --  통합 보안 모드 사용 여부
select SERVERPROPERTY ('IsLocalDB')  --  SQL Server Express LocalDB의 인스턴스
select SERVERPROPERTY ('IsSingleUser')  --  단일 사용자 모드 여부
select SERVERPROPERTY ('IsXTPSupported')  --  메모리 OLTP를 지원 여부
select SERVERPROPERTY ('MachineName')  --  서버 인스턴스가 실행 중인 컴퓨터 이름
select SERVERPROPERTY ('ProcessID')  --  SQL Server 서비스의 프로세스 아이디
select SERVERPROPERTY ('ProductVersion')  --  SQL Server 제품 버전
select SERVERPROPERTY ('ProductLevel')  --  SQL Server 인스턴스의 버전 레벨
select SERVERPROPERTY ('ResourceLastUpdateDateTime')  --  리소스 데이터베이스를 마지막으로 업데이트한 날짜
select SERVERPROPERTY ('ResourceVersion')  --  리소스 데이터베이스 버전
select SERVERPROPERTY ('ServerName')  --  Windows 서버 및 지정된 SQL Server 인스턴스에 대한 인스턴스 정보
select SERVERPROPERTY ('SqlCharSet')  --  SQL 문자 집합 아이디
select SERVERPROPERTY ('SqlCharSetName')  --  SQL 문자 집합 이름
select SERVERPROPERTY ('SqlSortOrder')  --  SQL 정렬 순서 아이디
select SERVERPROPERTY ('SqlSortOrderName')  --  SQL 정렬 순서 이름
select SERVERPROPERTY ('FilestreamShareName')  --  FILESTREAM이 사용하는 공유명
select SERVERPROPERTY ('FilestreamConfiguredLevel')  --  FILESTREAM액세스 수준
select SERVERPROPERTY ('FilestreamEffectiveLevel')  --  유효한 FILESTREAM 액세스 수준