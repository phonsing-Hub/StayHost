use StayHost

CREATE TABLE Users (
    UserID VARCHAR(12) NOT NULL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    FullName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PhoneNumber VARCHAR(20),
    Address VARCHAR(255),
    Gender ENUM('Male', 'Female', 'Other'),
    DateOfBirth DATE,
    IDCard VARCHAR(20),
    ProfilePicture VARCHAR(255)
);

CREATE TABLE Rooms (
    RoomID VARCHAR(12) NOT NULL PRIMARY KEY,
    RoomNumber VARCHAR(10) NOT NULL,
    RoomType VARCHAR(50) NOT NULL,
    RoomStatus ENUM('Available', 'Occupied', 'Under Maintenance') NOT NULL,
    Price DECIMAL(10,2) NOT NULL
);

CREATE TABLE Bookings (
    BookingID VARCHAR(12) NOT NULL PRIMARY KEY,
    UserID VARCHAR(12),
    RoomID VARCHAR(12),
    CheckInDate DATE NOT NULL,
    CheckOutDate DATE NOT NULL,
    BookingDate DATE NOT NULL,
    TotalPrice DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RoomID) REFERENCES Rooms(RoomID)
);

CREATE TABLE Payments (
    PaymentID VARCHAR(12) PRIMARY KEY,
    BookingID VARCHAR(12),
    PaymentDate DATE NOT NULL,
    Amount DECIMAL(10,2) NOT NULL,
    PaymentMethod VARCHAR(50) NOT NULL,
    FOREIGN KEY (BookingID) REFERENCES Bookings(BookingID)
);

CREATE TABLE Reviews (
    ReviewID VARCHAR(12) PRIMARY KEY,
    UserID VARCHAR(12),
    RoomID VARCHAR(12),
    Rating INT NOT NULL,
    Comment TEXT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (RoomID) REFERENCES Rooms(RoomID)
);
