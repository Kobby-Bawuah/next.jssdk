export default function handler(req, res) {
    try {
      // Perform some operations or checks
  
    //   if (1>2) {
    //     res.status(500).json({ message: 'Internal Server Error because 1>2' });
    //     return;
    //   }
  
      // Handle successful response
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      // Handle any unexpected errors
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }