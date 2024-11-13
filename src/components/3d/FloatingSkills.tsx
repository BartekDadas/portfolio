import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'mobile' | 'web' | 'backend';
}

const skills: Skill[] = [
  { name: 'Flutter/Dart', level: 80, category: 'mobile' },
  { name: 'Java', level: 55, category: 'mobile' },
  { name: 'Kotlin', level: 55, category: 'mobile' },
  { name: 'JavaScript', level: 40, category: 'web' },
  { name: 'TypeScript', level: 40, category: 'web' },
  { name: 'Ruby on Rails', level: 40, category: 'backend'},
  { name: 'SpringBoot', level: 40, category: 'backend'},
  { name: 'REST APIs', level: 60, category: 'backend' },
  { name: 'Git', level: 85, category: 'web' },
  { name: 'Firebase', level: 55, category: 'backend' },
  { name: 'AWS', level: 50, category: 'backend'},
];

const getColorByCategory = (category: string) => {
  switch (category) {
    case 'mobile':
      return '#00ff88';
    case 'web':
      return '#00aaff';
    case 'backend':
      return '#aa88ff';
    default:
      return '#00ff88';
  }
};

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const color = getColorByCategory(skill.category);

  return (
    <div className="skill-bar-container">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

const SkillsGrid: React.FC = () => {
  return (
    <div className="skills-list-container">
      {skills.map(skill => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsGrid;