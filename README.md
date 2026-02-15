Project Name : AI Model Inventory Manager


Live site URL :


Key Features :

1. Secure Firebase Authentication (Email/Password + Google Sign-In).

2. Private Routes with persistent login (no redirect on reload).

3. Add, Update, Delete, and View AI Models (Full CRUD functionality).

4. Store model details: Name, Framework, Use Case, Dataset, Description, Image(upload integration using ImgBB).

5. Creator-based access control (only creator can edit/delete).

6. Real-time Model Purchase Counter using MongoDB $inc.

7. Purchased models stored in a separate collection.

8. “My Models” page (models created by logged-in user).

9. “My Purchases” page (models purchased by logged-in user).

10. Dynamic Featured Models section (latest 6 models on Home page).

11. Search functionality using MongoDB $regex (case-insensitive).

12. Filter models by framework (e.g., TensorFlow, PyTorch).

13. Dark/Light theme toggle applied across the entire website.

14. Responsive design for mobile, tablet, and desktop.

15. Loading spinner during data fetching and form submission.

16. Toast notifications for success and error messages (no default alerts).

17. Custom 404 Error Page with user-friendly message.

18. RESTful API integration with Express and MongoDB.

19. Environment variables used to secure Firebase and MongoDB credentials.
