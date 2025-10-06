# Digital Farm Management Portal

A comprehensive biosecurity management system for pig and poultry farms, built with modern web technologies.

## Features

### 🏠 Dashboard
- Farm summary with key metrics
- Real-time risk score display
- Active alerts and notifications
- Compliance status tracking
- Visual progress indicators

### 🛡️ Risk Assessment
- Interactive form for farm evaluation
- Automated risk calculation algorithm
- Color-coded risk levels (Low/Medium/High)
- Personalized recommendations
- Real-time dashboard updates

### 🎓 Training Center
- Interactive training modules
- Video-based learning content
- Biosecurity best practices
- Emergency procedures guide
- Progress tracking

### 🚨 Alerts & Notifications
- Real-time alert simulation
- Severity-based color coding
- Alert history tracking
- Dismissible notifications
- Automated alert generation

### ✅ Compliance Tracker
- Vaccination records management
- Hygiene check scheduling
- Biosecurity protocol monitoring
- Training completion tracking
- Progress visualization

### 🌍 Multilingual Support
- English, Spanish, and French languages
- Dynamic content translation
- Localized form elements
- Cultural adaptation

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Responsive Design**: Mobile-first approach
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Key Features Implementation

### Risk Assessment Algorithm
The risk calculation considers multiple factors:
- Farm location (rural/suburban/urban)
- Animal count and type
- Hygiene practices rating
- Vaccination status
- Biosecurity measures implementation

**Risk Score Formula:**
```
Risk Score = Location Risk (0-20) + Animal Count Risk (0-20) + 
             Hygiene Risk (0-20) + Vaccination Risk (0-20) + 
             Biosecurity Risk (0-20)
```

### Alert System
- **High Risk**: Security breaches, disease outbreaks
- **Medium Risk**: Maintenance due, vaccination reminders
- **Low Risk**: Routine notifications, status updates

### Compliance Tracking
- **Vaccination Records**: Track vaccination schedules and status
- **Hygiene Checks**: Monitor cleaning and sanitization
- **Biosecurity Protocols**: Ensure proper implementation
- **Training Records**: Track staff training completion

## Usage Instructions

1. **Open the Portal**: Open `index.html` in a web browser
2. **Navigate Sections**: Use the sidebar to access different modules
3. **Risk Assessment**: Fill out the form to calculate your farm's risk level
4. **View Alerts**: Check the alerts section for notifications
5. **Training**: Access training modules for biosecurity education
6. **Compliance**: Monitor your farm's compliance status

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Mobile Responsiveness

The portal is fully responsive and optimized for:
- Desktop computers (1024px+)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## Customization

### Adding New Languages
1. Add translation object to `translations` in `script.js`
2. Include all required keys for the new language
3. Add option to language selector in HTML

### Modifying Risk Calculation
1. Update the `calculateRiskLevel()` function in `script.js`
2. Adjust scoring weights and thresholds
3. Modify recommendation logic

### Adding New Alert Types
1. Update alert types in `simulateNewAlert()` function
2. Add corresponding icons and styling
3. Update alert display logic

## Development Notes

- All code is well-commented for maintainability
- Modular JavaScript architecture for easy extension
- CSS uses utility-first approach with Tailwind
- Responsive design follows mobile-first principles
- Accessibility considerations included

## Future Enhancements

- Backend integration for data persistence
- Real-time data synchronization
- Advanced analytics and reporting
- Mobile app development
- Integration with IoT sensors
- Machine learning for predictive analytics

## License

This project is created for educational and demonstration purposes.

