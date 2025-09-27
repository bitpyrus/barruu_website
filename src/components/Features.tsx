import Image from 'next/image';

const featureCategories = [
  {
    name: 'Core Blocks',
    features: [
      {
        title: 'Text & Lists',
        description: 'Combine rich text paragraphs and nested lists with intuitive formatting controls.',
        image: '/list_and_paragraph_block.jpg',
      },
      {
        title: 'Code Blocks',
        description: 'Syntax highlighting for dozens of languages in both light and dark themes.',
        image: '/dark_code_block.jpg',
      },
      {
        title: 'Math & Graphs',
        description: 'Render complex LaTeX equations and visualize functions with an interactive graph block.',
        image: '/math_blocks_and_graph.jpg',
      },
    ],
  },
  {
    name: 'Interactive & Media',
    features: [
      {
        title: 'Multiple Choice',
        description: 'Create polls and quizzes with single or multiple selection options.',
        image: '/question_block1.jpg',
      },
      {
        title: 'Audio & Tables',
        description: 'Embed audio files with playback controls and organize data in structured tables.',
        image: '/audio_and_table_block.jpg',
      },
      {
        title: 'Task Lists',
        description: 'Keep track of your to-dos with interactive checkbox blocks.',
        image: '/check_box_blck.jpg',
      },
    ],
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">A Block for Every Idea</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Barruu provides a comprehensive set of blocks to bring your documents to life, from technical papers to interactive notes.
          </p>
        </div>

        <div className="space-y-16">
          {featureCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">{category.name}</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.features.map((feature) => (
                  <div key={feature.title} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={600}
                      className="w-full object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                      <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
