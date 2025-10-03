/*
VerificationPage.tsx
This page handles the verification of user accounts through email codes.
from a spring boot backend.
*/
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const VerificationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/verify', { code });
      toast.success(response.data.message);
      navigate('/dashboard');
    } catch (error) {
      toast.error('Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Verify Your Account</h1>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter verification code"
      />
      <button onClick={handleVerify} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify'}
      </button>
    </div>
  );
};

export default VerificationPage;
