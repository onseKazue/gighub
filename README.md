# GigHub Mobile App

A React Native mobile application designed to connect job seekers with short-term gig opportunities within their local barangay. The app aims to solve common problems in the current gig setup, such as fake job posts, unclear job information, and difficulty finding trusted workers or nearby jobs.

## Features

### Phase 1 (Current Implementation)
- **Onboarding Screen**: Interactive 3-slide introduction with custom illustrations
- **User Authentication**: Sign In and Sign Up functionality
- **User Role Selection**: Support for both Gig Seekers and Clients
- **Responsive UI**: Modern, clean design with consistent branding

### Planned Features
- **Geolocation-based Job Matching**: Google Maps integration for nearby job discovery
- **Real-time Communication**: In-app messaging between users
- **Transparent Ratings & Payments**: Trust-building features with pay rate display
- **Real-time Job Alerts**: Dashboard with location, skill, and pay-based filtering
- **Media & Portfolio Upload**: Support for file attachments and portfolio display
- **ID Verification**: Secure registration process with identity verification
- **Engagement Metrics**: Track user interactions and application statistics

## Tech Stack

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **React Navigation**: Screen navigation and routing
- **JavaScript**: Primary programming language

## Color Scheme

- **Primary Purple**: `#9340ff` - Main brand color
- **Black**: `#1c1c1c` - Primary text and dark elements
- **Gray**: `#4d4d4d` - Secondary text and inactive elements

## Project Structure

```
gighub/
├── components/
│   ├── OnboardingScreen.js     # Main onboarding with 3 slides
│   ├── SignInScreen.js         # User authentication
│   └── SignUpScreen.js         # User registration
├── navigation/
│   └── AppNavigator.js         # Navigation configuration
├── images/                     # App images and assets
│   ├── logo.png               # GigHub logo
│   ├── slide1.png             # Slide 1 illustration
│   ├── slide2.png             # Slide 2 illustration
│   └── slide3.png             # Slide 3 illustration
├── assets/                     # Expo default assets
├── App.js                      # Main app component
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gighub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
   - Scan the QR code with Expo Go (iOS/Android)
   - Or press 'a' for Android emulator
   - Or press 'i' for iOS simulator

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## User Roles & Access

### Gig Seeker Module (Job Hunter)
- Browse available gigs
- Apply for jobs
- Manage profile and portfolio
- Track applications and earnings
- Communicate with clients

### Gig Client Module (Job Poster)
- Post job opportunities
- Review applications
- Manage job postings
- Rate and review workers
- Process payments

### Admin Module (Web-only)
- User management
- Content moderation
- Analytics and reporting
- System configuration

## Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React Native best practices
- Maintain consistent naming conventions
- Use the specified color scheme

### Component Structure
- Each screen is a separate component
- Reusable components in shared folders
- Navigation handled through React Navigation
- State management with React hooks

### UI/UX Principles
- Clean, minimalist design
- Intuitive navigation
- Responsive layouts
- Accessibility considerations
- Consistent branding

## Data Privacy & Security

The app will comply with the Data Privacy Act of 2012 (Philippines) and implement:
- Secure data handling protocols
- User consent management
- Data protection compliance
- Privacy-first design principles

## Performance Evaluation

The system will be evaluated using ISO/IEC 25010:2011 Software Characteristics:
- **Functional Suitability**: Feature completeness and accuracy
- **Performance Efficiency**: Response time and resource utilization
- **Compatibility**: Interoperability and co-existence
- **Usability**: Understandability, learnability, and operability
- **Reliability**: Maturity, fault tolerance, and recoverability
- **Security**: Confidentiality, integrity, and authenticity
- **Maintainability**: Modularity, reusability, and analyzability
- **Portability**: Adaptability, installability, and replaceability

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact the development team.

---

**Note**: This is a functional prototype showcasing core features and usability. User feedback will help evaluate effectiveness and guide future improvements.
