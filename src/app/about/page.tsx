export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">About Us</h1>
        <p className="text-lg leading-relaxed mb-8">
          Welcome to our platform! We aim to deliver modern solutions with a focus on
          performance, design, and usability. Our team is passionate about building
          scalable systems that help businesses grow and individuals succeed.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">Our Mission</h2>
            <p className="text-gray-600">
              Empower individuals and businesses through reliable technology and
              seamless digital experiences.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">Our Vision</h2>
            <p className="text-gray-600">
              To become a trusted leader in innovation, providing solutions that
              inspire and transform industries.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3 text-indigo-600">Our Values</h2>
            <p className="text-gray-600">
              Integrity, creativity, and excellence are at the heart of everything
              we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
