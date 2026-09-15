/*
VerificationPage.tsx
This page handles the verification of user accounts through email codes.
from a spring boot backend.
*/
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Check } from 'lucide-react';

const AUTH_API_URL = 'http://localhost:8080/api/v1/auth';

const VerificationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = (location.state as { email?: string } | null)?.email;

  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [resending, setResending] = useState<boolean>(false);
  const [resendMessage, setResendMessage] = useState<string>('');

  useEffect(() => {
    if (!resendMessage) {
      return;
    }

    const timeout = window.setTimeout(() => setResendMessage(''), 5000);
    return () => window.clearTimeout(timeout);
  }, [resendMessage]);

  const handleVerify = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`${AUTH_API_URL}/verify`, {
        params: { token: code },
        timeout: 15000,
      });
      const message = (response.data as { message: string }).message;
      toast.success(message);
      navigate('/dashboard');
    } catch (error) {
      toast.error(axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error('Your email address is missing. Please sign up again.');
      return;
    }

    setResending(true);
    setResendMessage('');
    try {
      const response = await axios.post(`${AUTH_API_URL}/resend-verification`, { email }, {
        timeout: 15000,
      });
      const message = (response.data as { msg: string }).msg;
      setResendMessage(message || 'Verification code resent successfully.');
      toast.success(message);
    } catch (error) {
      toast.error(axios.isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : 'Unable to resend verification code');
    } finally {
      setResending(false);
    }
  };

  return (
    <div
      className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://api.builder.io/api/v1/image/assets/TEMP/7209a9ddb4485ca6445a72170e8fec52a55d636e?width=3840')`,
      }}
    >
      <form
        className="w-full max-w-[280px] rounded-md border-2 bg-white p-6 shadow-lg"
        onSubmit={handleVerify}
      >
        <h1 className="block text-center text-3xl font-semibold">Verify your account</h1>
        <hr className="mt-3" />

        <p className="mt-4 text-center text-sm text-brand-gray">
          Enter the verification code sent to your email to finish signing up.
        </p>

        <div className="mt-6">
          <label htmlFor="verification-code" className="mb-2 block text-base">
            Verification code
          </label>
          <input
            id="verification-code"
            className="w-full border px-3 py-2 text-base focus:border-gray-600 focus:outline-none focus:ring-0"
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Enter verification code"
            required
          />
        </div>

        <button
          className="mt-6 w-full rounded-md border-2 border-blue-700 bg-blue-600 px-5 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Verifying...' : 'Verify account'}
        </button>

        <button
          className="mt-3 w-full rounded-md border border-indigo-800 px-3 py-2 text-sm font-semibold text-indigo-800 transition-colors hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-60"
          type="button"
          onClick={handleResend}
          disabled={resending || loading}
        >
          {resending ? 'Sending code...' : 'Resend verification code'}
        </button>

        {resendMessage && (
          <p className="mt-3 flex justify-center text-green-700" role="status" aria-label="Verification code resent">
            <Check aria-hidden="true" className="h-5 w-5" />
          </p>
        )}
      </form>
    </div>
  );
};

export default VerificationPage;
