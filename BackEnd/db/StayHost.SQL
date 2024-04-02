use StayHost

CREATE TABLE Users (
    UserID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    IDCard VARCHAR(13),
    Firstname VARCHAR(50) NOT NULL,
    Lastname VARCHAR(50) NOT NULL,
    Birthdate DATE NOT NULL,
    Gender ENUM('M', 'F', 'O'),
    Address VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(10) NOT NULL,
    ProfilePicture VARCHAR(255)
);
ALTER TABLE Users AUTO_INCREMENT = 100;

INSERT INTO Users (IDCard, Firstname, Lastname, Birthdate, Gender, Address, PhoneNumber, ProfilePicture)
VALUES
    ('1234567890123', 'John', 'Doe', '1990-05-15', 'M', '123 Main St, City', '1234567890', 'john_doe.jpg'),
    ('2345678901234', 'Jane', 'Smith', '1985-08-20', 'F', '456 Elm St, Town', '9876543210', 'jane_smith.jpg'),
    ('3456789012345', 'Alice', 'Johnson', '1978-11-10', 'F', '789 Oak St, Village', '5551234567', 'alice_johnson.jpg'),
    ('4567890123456', 'Bob', 'Brown', '1995-03-25', 'M', '101 Pine St, Hamlet', '9998887776', 'bob_brown.jpg'),
    ('5678901234567', 'Charlie', 'Davis', '1982-09-05', 'M', '202 Maple St, County', '3334445555', 'charlie_davis.jpg'),
    ('6789012345678', 'Eve', 'Wilson', '1970-12-30', 'F', '303 Cedar St, State', '2225558888', 'eve_wilson.jpg'),
    ('7890123456789', 'David', 'Lee', '1993-07-12', 'M', '404 Birch St, Country', '7779993333', 'david_lee.jpg'),
    ('8901234567890', 'Grace', 'Clark', '1988-04-18', 'F', '505 Oak St, Republic', '1112223333', 'grace_clark.jpg'),
    ('9012345678901', 'Frank', 'Martinez', '1980-01-08', 'M', '606 Pine St, Kingdom', '9991112222', 'frank_martinez.jpg'),
    ('0123456789012', 'Sophia', 'Lopez', '1998-06-22', 'F', '707 Elm St, Empire', '8887776666', 'sophia_lopez.jpg');

   SELECT 
    UserID,
    TIMESTAMPDIFF(YEAR, Birthdate, CURDATE()) AS Age
FROM Users;


CREATE TABLE Rooms (
    RoomID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    RoomNumber VARCHAR(10) NOT NULL,
    RoomType ENUM('S', 'M', 'L') NOT NULL,
    RoomStatus ENUM('Available', 'Occupied') NOT NULL,
    Price DECIMAL(10,2) NOT NULL
);
ALTER TABLE Rooms AUTO_INCREMENT = 10;
ALTER TABLE Rooms MODIFY COLUMN RoomStatus ENUM('Available', 'Occupied') NOT NULL DEFAULT 'Occupied';
INSERT INTO Rooms (RoomNumber, RoomType, RoomStatus, Price)
VALUES
    ('101', 'S', 'Available', 50.00),
    ('102', 'S', 'Occupied', 50.00),
    ('103', 'M', 'Available', 75.00),
    ('104', 'M', 'Available', 75.00),
    ('105', 'L', 'Available', 100.00),
    ('106', 'L', 'Occupied', 100.00),
    ('201', 'S', 'Available', 50.00),
    ('202', 'S', 'Occupied', 50.00),
    ('203', 'M', 'Available', 75.00),
    ('204', 'M', 'Available', 75.00),
    ('205', 'L', 'Available', 100.00),
    ('206', 'L', 'Occupied', 100.00),
    ('301', 'S', 'Available', 50.00),
    ('302', 'S', 'Occupied', 50.00),
    ('303', 'M', 'Available', 75.00),
    ('304', 'M', 'Available', 75.00),
    ('305', 'L', 'Available', 100.00),
    ('306', 'L', 'Occupied', 100.00),
    ('401', 'S', 'Available', 50.00),
    ('402', 'S', 'Occupied', 50.00);

CREATE TABLE Bookings (
    BookingID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    RoomID INT NOT NULL,
    CheckInDate DATE NOT NULL,
    CheckOutDate DATE NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RoomID) REFERENCES Rooms(RoomID),
    CONSTRAINT CheckOutAfterCheckIn CHECK (CheckOutDate > CheckInDate)
);

INSERT INTO Bookings (UserID, RoomID, CheckInDate, CheckOutDate)
VALUES
    (101, 11, '2024-04-01', '2024-04-03'),
    (102, 22, '2024-04-02', '2024-04-05'),
    (103, 13, '2024-04-03', '2024-04-06'),
    (104, 14, '2024-04-04', '2024-04-08'),
    (105, 15, '2024-04-05', '2024-04-10'),
    (106, 24, '2024-04-06', '2024-04-12'),
    (107, 17, '2024-04-07', '2024-04-15'),
    (108, 26, '2024-04-08', '2024-04-18'),
    (109, 19, '2024-04-09', '2024-04-20'),
    (100, 21, '2024-04-11', '2024-04-25');

  CREATE TABLE Payments (
    PaymentID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    BookingID INT NOT NULL,
    PaymentDate DATE NOT NULL,
    Amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (BookingID) REFERENCES Bookings(BookingID)
);

INSERT INTO Payments (UserID, BookingID, PaymentDate, Amount)
SELECT b.UserID, b.BookingID, b.CheckOutDate, r.Price 
FROM Bookings b
inner join Rooms r on r.RoomID = b.RoomID;

CREATE TABLE Reviews (
    ReviewID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    RoomID INT NOT NULL,
    Rating INT NOT NULL,
    Comment TEXT,
    ReviewDate DATE NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RoomID) REFERENCES Rooms(RoomID)
);


CREATE TABLE Admins (
    AdminID VARCHAR(12) NOT NULL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    FullName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PhoneNumber VARCHAR(20)
);

CREATE TABLE AccessRights (
    RightID VARCHAR(12) NOT NULL PRIMARY KEY,
    RightName VARCHAR(100) NOT NULL
);

CREATE TABLE AdminAccess (
    AdminID VARCHAR(12),
    RightID VARCHAR(12),
    FOREIGN KEY (AdminID) REFERENCES Admins(AdminID),
    FOREIGN KEY (RightID) REFERENCES AccessRights(RightID),
    PRIMARY KEY (AdminID, RightID)
);
