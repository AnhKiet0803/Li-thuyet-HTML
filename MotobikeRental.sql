--tạo database
create database MotobikeRental
go
use MotobikeRental
go


--tạo bảng
create table [User](
UserId UniqueIdentifier,
FullName nvarchar(50),
PhoneNumber nvarchar(15),
[Image] nvarchar(256),
CitizenIdentificationCard nvarchar(256),
[Address] nvarchar(150),
Sex varchar(10),
primary key (UserId)
);
create table Vehicle(
VehicleId Nvarchar(15),
VehicleName Nvarchar(30),
[Type] varchar(10),
Color Varchar(10),
[Status] Varchar(10),
primary key (VehicleId)
);
create table Station(
StationId Nvarchar(20),
StationName Nvarchar(50),
[Address] nvarchar(150),
Long nvarchar(30),
Lat nvarchar(30),
primary key (StationId)
); 
create table VehicleStation(
StationId Nvarchar(20),
VehicleId Nvarchar(15),
primary key (StationId,VehicleId),
foreign key (StationId) references Station(StationId),
foreign key (VehicleId) references Vehicle(VehicleID)
);
create table [Contract](
Id nvarchar(30),
VehicleId Nvarchar(15),
UserId UniqueIdentifier,
StationIdRev nvarchar(256),
StationIdRef nvarchar(256),
RentStart datetime,
RentEnd datetime,
primary key (Id),
foreign key (UserId) references [User](UserId),
foreign key (VehicleId) references Vehicle(VehicleID)
);


--thêm dữ liệu bảng user
insert into [User](UserId,FullName,PhoneNumber,[Image],CitizenIdentificationCard,[Address],Sex) values(N'32050234-D149-496A-B5E3-CA1913F6E492',N'Nguyễn Van A',0947123456,N'img1',0123456789,N'Sn 34 Ngo 1 Trinh Van Bo,Nam Tu Liem',N'Nam')
insert into [User](UserId,FullName,PhoneNumber,[Image],CitizenIdentificationCard,[Address],Sex) values(N'4FF4694E-D69B-43E9-9E9F-461EF937D4E2',N'Nguyễn Van B',0836678789,N'img2',9876543210,N'100 Xuân Thuỷ,Cau Giay',N'Nam')
insert into [User](UserId,FullName,PhoneNumber,[Image],CitizenIdentificationCard,[Address],Sex) values(N'6BAB022F-5958-4221-AC50-5E2042999B40',N'Nguyễn Thi C',094106345,N'img3',876543219,N'Sn 29,ngach 51, ngõ 245 Chua Lang',N'Nu')
select NEWID()
select*from [User]


--thêm dữ liệu bảng Vehicle
insert into Vehicle(VehicleId,VehicleName,[Type],Color,[Status]) values(N'18B2-56789',N'VinFast EVO 200',N'Motorbike',N'Black',N'rented')
insert into Vehicle(VehicleId,VehicleName,[Type],Color,[Status]) values(N'36AC-12345',N'Vinfast Feliz S',N'Motorbike',N'Blue',N'unrented')
insert into Vehicle(VehicleId,VehicleName,[Type],Color,[Status]) values(N'29BK-34567',N'Vinfast Motio',N'Motorbike',N'Red Black',N'Reserved')
select*from Vehicle


--thêm dữ liệu bảngStation
insert into Station(StationId,StationName,[Address],Long,Lat) values(N'HN01', N'Trạm Hà Nội', N'123 Pho Hue, Hai Ba Trung,Ha Noi',N'105.851791',N'21.015238')
insert into Station(StationId,StationName,[Address],Long,Lat) values(N'HN02', N'Trạm Hà Nội', N'220 Duong Lang, Ha Noi',N'105.816600',N'21.06320')
insert into Station(StationId,StationName,[Address],Long,Lat) values(N'HN03', N'Trạm Hà Nội', N'144 Xuan Thuy, Cau Giay, Ha Noi',N'105.851791',N'21.015238')
select*from Station


--thêm dữ liệu bảng VehicleStation
insert into VehicleStation(StationId,VehicleId) values(N'HN01',N'18B2-56789')
insert into VehicleStation(StationId,VehicleId) values(N'HN02',N'36AC-12345')
insert into VehicleStation(StationId,VehicleId) values(N'HN03',N'29BK-34567')
select*from VehicleStation


--thêm dữ liệu bảng contract
insert into [Contract](Id,VehicleId,UserId,StationIdRev,StationIdRef,RentStart,RentEnd) values(84756,N'18B2-56789',N'32050234-D149-496A-B5E3-CA1913F6E492',N'HN01',N'HN03',N'2025-10-02 09:00:00',N'2025-10-02 12:00:00')
insert into [Contract](Id,VehicleId,UserId,StationIdRev,StationIdRef,RentStart,RentEnd) values(28917,N'36AC-12345',N'4FF4694E-D69B-43E9-9E9F-461EF937D4E2',N'HN03',N'HN02',N'2025-10-02 07:00:00',N'2025-10-02 08:00:00')
insert into [Contract](Id,VehicleId,UserId,StationIdRev,StationIdRef,RentStart,RentEnd) values(82736,N'29BK-34567',N'6BAB022F-5958-4221-AC50-5E2042999B40',N'HN01',N'HN02',N'2025-10-02 15:15:00',N'2025-10-02 17:05:00')
select*from [Contract]


--tra dữ liệu ô A gôm sdt, bks,tên xe,thuê trog bao lâu
select C.FullName,C.PhoneNumber,B.VehicleId,B.VehicleName,A.RentStart,A.RentEnd from [Contract] A 
                                                                                join Vehicle B on A.VehicleId = B.VehicleId
                                                                                join [User] C on A.UserId = C.UserId
                                                                                where C.FullName = N'Nguyễn Van A';


--tra dữ liệu các trạm có bn xe, tên xe, màu sắc và trạng thái 
select G.StationId,F.VehicleId,F.VehicleName,F.Color,F.[Status] from VehicleStation E
                                                                join Vehicle F on E.VehicleId = F.VehicleId
                                                                join Station G on E.StationId = G.StationId;	