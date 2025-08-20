# Living Engineering Laboratory - Admin System

## Overview

This website now includes a comprehensive admin system that allows authorized users to manage engineering projects without needing technical knowledge. The admin can add, edit, and delete projects through a user-friendly web interface.

## Accessing the Admin System

1. **Navigate to the Admin Panel**: Click on the "Admin" button in the navigation bar (top right of the website)
2. **Login Credentials**:
   - Username: `admin`
   - Password: `admin123`

## Features

### Project Management
- **Add New Projects**: Create new engineering projects with full details
- **Edit Existing Projects**: Modify project information, procedures, and references
- **Delete Projects**: Remove projects that are no longer relevant
- **View All Projects**: See a complete list of all projects in the system

### Project Information Fields
Each project includes:
- **Title**: Project name
- **Category**: Engineering discipline (Environmental, Structural, etc.)
- **Course ID**: Course identifier (e.g., CEE 400)
- **Course Name**: Full course title
- **Description**: Detailed project overview
- **Procedure**: Step-by-step project implementation process
- **References**: Academic and technical references
- **Images**: Project photos (currently uses default images)

## How to Use

### Adding a New Project
1. Click "Add New Project" button
2. Fill in all required fields:
   - Title, Category, Course ID, Course Name
   - Description (detailed overview)
   - Procedure steps (click "Add Step" for additional steps)
   - References (click "Add Reference" for additional sources)
3. Click "Add Project" to save

### Editing a Project
1. Find the project in the list
2. Click the "Edit" button
3. Modify the information as needed
4. Click "Update Project" to save changes

### Deleting a Project
1. Find the project in the list
2. Click the "Delete" button
3. Confirm the deletion when prompted

## Data Storage

- **Current Implementation**: Projects are stored in the browser's localStorage
- **Production Recommendation**: Implement a proper database (MongoDB, PostgreSQL, etc.)
- **Data Persistence**: Projects persist between browser sessions but are local to each device

## Security Considerations

### Current Implementation (Demo)
- Simple username/password authentication
- Credentials stored in plain text
- No session expiration
- Suitable for development and testing

### Production Recommendations
- Implement proper authentication (JWT, OAuth, etc.)
- Use environment variables for credentials
- Add session management with expiration
- Implement role-based access control
- Use HTTPS for all admin communications
- Regular security audits

## Technical Implementation

### Components
- `AdminLogin.tsx`: Authentication interface
- `AdminDashboard.tsx`: Main project management interface
- `app/admin/page.tsx`: Admin page routing

### Data Flow
1. Admin logs in → Authentication state stored in localStorage
2. Admin adds/edits projects → Data saved to localStorage
3. Public pages read from localStorage → Display updated projects
4. Changes are immediately visible to website visitors

## Future Enhancements

### Image Upload
- Implement file upload functionality for project images
- Add image compression and optimization
- Support multiple image formats

### Advanced Features
- Project categories management
- User roles and permissions
- Project approval workflow
- Analytics and reporting
- Backup and restore functionality

### Database Integration
- Replace localStorage with proper database
- Implement API endpoints for CRUD operations
- Add data validation and sanitization
- Implement search and filtering

## Troubleshooting

### Common Issues
1. **Can't Access Admin Panel**: Ensure you're using the correct credentials
2. **Projects Not Saving**: Check browser localStorage support
3. **Changes Not Visible**: Refresh the page to see updates
4. **Login Issues**: Clear browser cache and try again

### Browser Compatibility
- Modern browsers with localStorage support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers may have limited functionality

## Support

For technical support or questions about the admin system:
1. Check this documentation first
2. Review the browser console for error messages
3. Ensure all required fields are filled
4. Try logging out and back in

## Maintenance

### Regular Tasks
- Review and update project information
- Remove outdated projects
- Backup project data regularly
- Monitor system performance

### Updates
- Keep the website and admin system updated
- Test new features before deployment
- Maintain security best practices
- Document any changes made

---

**Note**: This admin system is designed to be user-friendly for non-technical users while providing powerful project management capabilities. Regular backups and security updates are recommended for production use.
